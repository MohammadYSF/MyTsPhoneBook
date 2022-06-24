export type personType ={
    id:number
    name:string,
    phoneNumber:string,
    handleEdit:(id:number) => void,
    handleDelete:(id:number) => void
};