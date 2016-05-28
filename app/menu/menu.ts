
export interface IMenu{
    Id: number;
    ParentId: number;
    Nome: string;
    Descricao: string;
    Action: string;
    DisplayOrder: number;
    VisibleInMenu: boolean;
    
    Filhos: IMenu[];
}