import DataFetching from "../Data-fetching";


const Center = ({title, sort, setSort, index,states ,setState}) =>{

    const handleSort = () => {
        if (sort !== index) {
            setSort(index)
            setState(title)

        } else {
            setSort(null)
        }
    }



    return(
        // <li onClick={switchClass} className={state ? ' item clicked-li' : 'item carte-verde'}>Carte verde</li>
<li key={index} className={`item ${sort === index ? 'active' : ''}`} onClick={()=> {
    handleSort(index)
}}>{title}</li>
    )
}

export default Center