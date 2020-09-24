export interface Colors {
    readonly body: string;

    readonly primary: string;
    readonly secondary: string;
    readonly secondaryLight: string;
    
    readonly grey: string;
    readonly black: string;
}


export interface Theme {
    readonly colors: Colors;
  
    readonly content: Readonly<{
        pageBackground: string;
        text: string;
    }>;

    readonly menu: Readonly<{
        text: string;
        border: string;
        optionBackground: string;
        activeOptionBackground: string;
    }>;
}