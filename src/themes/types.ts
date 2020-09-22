export interface Colors {
    readonly body: string;

    readonly primary: string;
    readonly secondary: string;
    readonly secondaryLight: string;
    
    readonly grey: string;
}


export interface Theme {
    readonly colors: Colors;
  
    readonly background: Readonly<{
        pageBackground: string;
    }>;

    readonly menu: Readonly<{
        text: string;
        border: string;
        optionBackground: string;
        activeOptionBackground: string;
    }>;
}