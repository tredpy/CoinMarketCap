declare module '*.scss' {
    type ClassNames = Record<string, string>;
    const classNames: ClassNames;
    export = classNames;
}
declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';
    const SVG: (props: SVGProps<SVGElement>) => ReactElement;
    export default SVG;
}
declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
