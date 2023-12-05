import { useState } from "react"

export default function AddEducation({onChange}){
    const [education, setEducation] = useState([])
    
    const onChangeData = (e) => {

    }

    const newEducation = () =>{
        setEducation([...education, {
            level:"",
            university_name: "",
            faculty: "",
            major: "",
            end_date: ""
        }])
    }

    const educations = education.map((ed, index) => (<div key={index } className="education">
    <span>X</span>
    <fieldset className={"fieldset fieldset-md"}>
        <label>Уровень</label>
        <select className="input" onChange={onChangeData}>
            <option>Высшее</option>
            <option>Не полное высшее</option>
        </select>
    </fieldset>

    <fieldset className={"fieldset fieldset-md"}>
        <label>Название учебного заведения</label>
        <input className="input" onChange={onChangeData} type="text"/>
    </fieldset>

    <fieldset className={"fieldset fieldset-md"}>
        <label>Факультет</label>
        <input className="input" onChange={onChangeData} type="text"/>
    </fieldset>

    <fieldset className={"fieldset fieldset-md"}>
        <label>Специализация</label>
        <input className="input" onChange={onChangeData} type="text"/>
    </fieldset>

    <fieldset className={"fieldset fieldset-md"}>
        <label>Год окончания</label>
        <input className="input" onChange={onChangeData} type="text"/>
    </fieldset>

</div>))

    return(
        <div>

                {educations}
                <a onClick={()=>(newEducation)}>{education.length > 0 ? "Указать еще одно место обучения" : "Указать место обучения"}</a>
        </div>
    )
}