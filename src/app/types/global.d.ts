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
