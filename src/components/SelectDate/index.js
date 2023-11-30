export default function SelectDate({size}){
    return(
        <fieldset className={"fieldset " + size}>
            <input className="input" placeholder={placeholder} type={type} onChange={onChangeDay}/>
            <select onChange={onChangeMonth} placeholder="Месяц" className="input">
                <option>январь</option>
                <option>февраль</option>
                <option>март</option>
                <option>апрель</option>
                <option>май</option>
                <option>июнь</option>
                <option>июль</option>
                <option>август</option>
                <option>сентябрь</option>
                <option>октябрь</option>
                <option>ноябрь</option>
                <option>декабрь</option>
                <input className="input" placeholder="Год" type={type} onChange={onChangeYear}/>
            </select>
        </fieldset>
    )
}