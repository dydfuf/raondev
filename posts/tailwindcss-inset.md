---
title: Tailwindcss inset의 하위호환 이슈
date: 2023-11-02
description: Tailwindcss를 사용하면서 발생한 하위호환 이슈에 대해 소개합니다.
category: Tailwindcss, inset, 하위호환
---

> Tailwindcss를 사용하면서 발생한 하위호환 이슈에 대해 소개합니다.  
> 발생한 이슈, 발생한 원인, 가능한 해결법, 적용한 해결법 순으로 소개합니다.

## 발생한 이슈

어느 날 평화롭게 업무를 보던 도중 하나의 버그 티켓이 할당되었습니다.  
`특정 iOS 기기에서 화면의 요소들이 정상적으로 보이지 않는다`라는 이슈였습니다.

해당 버그가 발생하는 기기를 보고 확인하기 전 해당 이슈가 발생하는 페이지에 웹 사파리로 접근하여 확인했을때는 정상적으로 요소들이 보이고 있었습니다.

특별히 문제가 될 만한 원인을 찾지 못해 해당 버그가 발생하는 기기를 대여받아 모바일 사파리로 확인했을 때는 정말로 요소들이 정상적으로 보이지 않고 있었습니다!

제가 판단하기에 해당 요소의 위치가 정상적이지는 않아도 서비스를 이용하는 데는 문제가 없을거라 생각해서 중요도를 `low`로 변경 후 다른 티켓을 먼저 처리하고 있었습니다.

하지만 당일 오후 새로운 버그 티켓을 할당받았습니다.

이번에는, `form 제출 시 아무런 동작이 없다`라는 이슈였습니다.

이번에는 버그 내용만 봐도 심각한 이슈여서 바로 확인에 들어갔습니다.

이전 버그 티켓 재현과 동일하게 로컬에서 재현을 시도 했습니다. 이번에도 로컬에서는 정상적으로 동작했고, 버그가 발생하는 기기 대여 시 해당 버그가 재현되었습니다.

form 제출 시 아무런 동작을 하지 않는 것 같았지만, 개발자도구로 확인했을 때는 서버에 요청을 정상적으로 보내고 있었습니다.  
정상적인 동작은 form 제출 시 API를 호출하고 팝업을 통해 유저를 다른 페이지로 이동시키는 것 입니다.

서버에 요청은 정상적으로 보내는 것을 확인 했으니, 문제는 팝업이 정상적으로 노출되지 않고 있다고 판단 했습니다.

이제 팝업이 노출되지 않는 이슈를 해결할 차례입니다. 코드를 확인했을 때는 현상이 이해되지 않았습니다. 이후 DOM이 정상적으로 추가되었나 확인을 해봤는데, 어라? 정상적으로 추가 되어있었습니다.

하지만 css가 적용되는 부분을 확인했을 때 비로소 원인을 찾을 수 있었습니다.

## 이슈의 원인

이슈의 원인은 바로 [inset](https://developer.mozilla.org/en-US/docs/Web/CSS/inset) css가 적용되지 않는 것이었습니다.

기존 팝업의 구현이 화면의 가운데에 위치시키기 위해 css의 right, bottom, left, top 을 모두 0을 주어서 화면의 가운데에 놓일 수 있도록 했습니다.

해당 값을 편하게 사용할 수 있도록 tailwind에서는 `inset-0`이라는 유틸리티 클래스를 제공합니다.

해당 유틸리티 클래스는 [문서](https://tailwindcss.com/docs/top-right-bottom-left)에서도 확인할 수 있듯이 `right: 0; bottom: 0; left: 0; top: 0`이 아닌 `inset: 0`의 css를 넣어주고 있었습니다.

[caniuse](https://caniuse.com/?search=inset)에서 확인해 보면 해당 css는 iOS 14.5부터 지원하는 css 속성이었습니다!

드디어 원인을 찾았습니다! 👏  
특정 iOS 기기에서 요소들이 정상적으로 보이지 않는 이슈부터, form 제출 시 아무런 동작을 하지 않는 ~~(사실은 팝업이 노출되지 않았을 뿐인)~~ 이슈까지 원인을 찾았습니다.

## 이슈의 해결

이제 이슈를 해결할 차례입니다.

가장 간단하게 해결하는 방법은 `브라우저 지원 범위를 수정하는 것` 입니다.  
caniuse에서 확인했을 때 전체 유저의 92.33% 가 해당 css를 지원하는 브라우저를 사용하고 있습니다.  
서비스의 특성에 따라 다르겠지만 저희 서비스에서는 8%의 유저도 무시할 수 없었습니다.

다음 해결 방법은 `tailwindcss를 v2로 내리는 것` 입니다.  
tailwindcss v3에서는 `inset-0` 유틸리티 클래스가 `inset: 0`이라는 css 속성을 가지고 있지만, [tailwindcss v2](https://v2.tailwindcss.com/docs/top-right-bottom-left)에서는 `inset-0` 유틸리티 클래스가 `top: 0px; right: 0px; bottom: 0px; left: 0px;`라는 css 속성을 가지고 있습니다.  
당연하게도 해당 css 속성을 사용하면서 하위호환을 고려할 필요는 없습니다. 하지만, 해당 이슈를 해결하기 위해 다운그레이드를 하기에는 v3에서 제공하는 [JIT](https://tailwindcss.com/blog/tailwindcss-v3#just-in-time-all-the-time) 컴파일러 및 여러 유용한 유틸리티 클래스를 사용하지 못하므로 썩 좋은 해결 방법 같지는 않습니다.

다음 해결 방법은 `global.css 파일에 'inset-0' 클래스를 override하는 것` 입니다.
아래와 같이 `inset-0` 클래스를 top, right, bottom, left 속성을 가진 클래스로 override를 하는 것 입니다.  
기존 코드를 수정하지 않아도 되고, 하위 호환도 명확하게 해결이 되니 썩 나쁘지 않아 보이는 해결 방법입니다.

```css
// global.css

.inset-0 {
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
}
```

마지막은 제가 적용한 해결 방법인 `tailwind css의 plugins를 활용하는 방법` 입니다.  
tailwindcss는 custom [plugin](https://tailwindcss.com/docs/plugins)을 추가할 수 있는 방법을 제공합니다.  
tailwindcss 라이브러리를 사용하면서, 해당 라이브러리의 기능을 활용하여 해결하는 게 유지보수 및 추후 다른 사람이 보았을 때, tailwindcss의 문제점이 있어서 추가된 것이라고 컨텍스트가 남을 수 있을 것 같아 해당 해결 방식을 채택했습니다.

## 적용하기

아래와 같이 plugin 파일을 만들어 줍니다. 문제의 원인은 `inset-0`이었지만, `inset-*`에서 충분히 발생할 수 있는 문제였기 때문에 넉넉하게 100까지 추가해 주었습니다.  
사용하지 않는 클래스가 늘어날 것 같지만 JIT 컴파일러가 사용하지 않는 클래스는 제거해 주기 때문에 크게 걱정은 하지 않아도 괜찮습니다.

```js
// tailwind/plugin/inset.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
  const insets = {};
  Array.from({ length: 100 }, (_, index) => index).forEach(index => {
    insets['.inset-' + index] = {
      top: index,
      right: index,
      bottom: index,
      left: index,
    };
  });
  addUtilities(insets);
});
```

이제 tailwind.config.js에 plugin을 적용해 줍니다. 이제 `inset-0`이 대부분의 기기에서 정상적으로 동작하게 되었습니다.

```js
// tailwind.config.js
module.exports = {
  //...,
  plugins: [require('./tailwindcss/plugin/inset.js')],
};
```

## 결론

특정 iOS 기기에서 발생하는 버그들로부터 알아본 tailwindcss의 inset 클래스에 대한 하위호환을 유지하기 위해 가능한 해결 방법 및 제가 적용한 해결법을 알아보았습니다.

단순히 `이런 이슈가 있어서 이렇게 해결했다`, 가 아닌 특정 버그로부터 어떤 문제가 발생했는지, 왜 발생했는지, 해결 가능한 방법에는 어떤 것이 있는지, 그중에서 채택한 해결 방법은 어떤 것인지에 대해 살펴보았습니다.

많은 사람들이 이 글을 보고 도움이 되었으면 하는 바람입니다.

## 참조

- https://developer.mozilla.org/en-US/docs/Web/CSS/inset
- https://tailwindcss.com/docs/top-right-bottom-left
- https://v2.tailwindcss.com/docs/top-right-bottom-left
- https://caniuse.com/?search=inset
- https://tailwindcss.com/blog/tailwindcss-v3#just-in-time-all-the-time
- https://tailwindcss.com/docs/plugins
