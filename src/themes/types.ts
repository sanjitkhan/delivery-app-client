export interface Colors {
    readonly body: string;
}


export interface Theme {
    readonly colors: Colors;
  
    readonly background: Readonly<{
        pageBackground: string;
    }>;
}