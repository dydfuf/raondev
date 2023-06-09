import React, { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex py-40 flex-col w-full max-w-[768px] px-20 h-full">
        {children}
      </div>
    </div>
  );
}
