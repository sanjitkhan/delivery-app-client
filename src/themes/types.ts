export interface Colors {
    readonly body: string;

    readonly primary: string;
    readonly secondary: string;
    readonly secondaryLight: string;
    
    readonly grey: string;
    readonly black: string;

    readonly darkRed: string;
}


export interface Theme {
    readonly colors: Colors;
  
    readonly content: Readonly<{
        pageBackground: string;
        text: string;
        border: string;
    }>;

    readonly menu: Readonly<{
        text: string;
        border: string;
        optionBackground: string;
        activeOptionBackground: string;
    }>;
}