export default function Myresume ({item}){
    return(
        <div className="card mtb4">
            <a className="h3">{item.position} отдела продаж </a>
            <p>Создан {item.createdAt}</p>

            <h3>Статитистика</h3>
            <div className="flex"> 
                <a className="p3">{item.stats.show}</a>
                <a className="p3">{item.stats.views}</a>
                <a className="p3">{item.stats.applies}</a>
            </div>
        </div>
    )
}