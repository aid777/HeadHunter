'use client'
import {useState} from 'react'

export default function UserLogin () {
const [step, setStep] = useState(1)

    return (
        <section className="login-page"> 
            {step === 1 && <div className="card">
                <h1>Поиск работы</h1>
                <form>
                    <input className="input" placeholder="Введите почту"/>
                    <button className="button button-primary" onClick={()=>setStep(2)}>Продолжить</button>
                </form>
            </div>}

            {step === 1 && <div className="card">
                <h1>Поиск сотрудников</h1>
                <p>Размещение вакансий и доступ к базе резюме</p>
                <button className="button button-primary-bordered">Я ищу сотрудников</button>
            </div>}

            {step === 2 && <div className="card">
                <h1>Отправили код на ....</h1>
                <p>Напишите его что подтвердить что это вы, а не кто-то другой</p>
                <form>
                    <input className="input" placeholder="Введите почту"/>
                    <p>Повторить можно через 00:48</p>
                    <button className="button button-primary">Продолжить</button>
                    <button className="button button-primary-bordered" onClick={()=>setStep(1)}>Назад</button>
                </form>
            </div>}

        </section>
    )
}