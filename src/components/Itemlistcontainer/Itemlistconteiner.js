import ItemCount from "../ItemCount/ItemCount"

const Itemlistconteiner = () => {
    const onAdd = (count) => {
        if(count > 1){
            console.log(`Se compraron ${count}`);
        } else {
            console.log(`Se compro ${count}`);
        }
    }
    return(
        <>
            <div className="producto">
                <div className="descrpcionProducto">
                    <p>Tabla de Surf</p>        
                </div>
              <ItemCount stock={3} initial={1} onAdd={onAdd}/>
            </div>
        </>
    )
}
export default Itemlistconteiner;