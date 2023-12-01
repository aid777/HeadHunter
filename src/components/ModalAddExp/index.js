export default function ModalAddExp({}){

    const onChangeMonth = () => {
    
    }
    
    const onChangeYear = () => {
        
    }

    const onChangeMonthEnd = () => {
    
    }
    
    const onChangeYearEnd = () => {
        
    }
    return(
        <div className="modal">
            <div className="modal-backdrop"></div>
            <div className="modal-inner">
                <h2>Опыт работы</h2>

                <h3>Начало работы</h3>
                
                    <div className="selectdate selectdate-nady">
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
                        </select>
                        <input className="input" placeholder="Год" type="text" onChange={onChangeYear}/>
                    </div>

                <h3>Конец работы</h3>

                    <div className="selectdate selectdate-nady">
                        <select onChange={onChangeMonthEnd} placeholder="Месяц" className="input">
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
                        </select>
                        <input className="input" placeholder="Год" type="text" onChange={onChangeYear}/>
                    </div>

                    <h4>Организация</h4>
                    <input className="input" placeholder="Название компании" type="text" />

                    <h4>Должность</h4>
                    <input className="input" placeholder="Должность" type="text" />

                    <h4>Обязанности на рабочем столе</h4>
                    <textarea className="textarea" placeholder="Опишите что вы делали на работе" type="text"></textarea>
                    <div className="modal-actions">
                        <button className="button button-primary-bordered">Отменить</button>
                        <button className="button button-primary">Сохранить</button>
                    </div>
            </div>
        </div>
     )
}