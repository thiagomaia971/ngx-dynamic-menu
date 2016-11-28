export class ItemMenu{

    public Id: number;
    public ParentId: number;
    public Nome: string;
    public Descricao: string;
    public Action: string;
    public DisplayOrder: number;
    public VisibleInMenu: boolean;

    public Filhos: ItemMenu[];

}