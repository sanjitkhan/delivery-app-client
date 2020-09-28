export interface Colors {
    readonly body: string;
    
    readonly grey: ColorGradientLevels;

    readonly darkRed: string;
  
    readonly primary: BrightnessLevels;
    readonly secondary: BrightnessLevels;
}

export interface ColorGradientLevels {
    [x: number]: string;
    [y: string]: string;
}

export interface BrightnessLevels {
    lightest?: string;
    lighter?: string;
    light?: string;
    normal: string;
    dark?: string;
    darker?: string;
    darkest?: string;
}

export interface Theme {
    readonly colors: Colors;

    readonly content: Readonly<{
        pageBackground: string;
        text: BrightnessLevels;
        border: string;
    }>;

    readonly menu: Readonly<{
        text: string;
        border: string;
        optionBackground?: string;
        activeOptionBackground: string;
    }>;
}
