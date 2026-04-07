import SearchIcon from '@mui/icons-material/Search'
import PIcon from '@mui/icons-material/Add'
import UserIcon from '@mui/icons-material/Person'
import '../styles/Home.css'
import { useState } from 'react'

export default function Home () {

    const [inputV, setInputV] = useState(false)

    const req = [
        {
            item: "Escudo do Flamengo", 
            cliente: "Arthur Antunes Coimbra",
            atendente: "Thiago Emiliano da Silva",
            status: "Aprovado",
            data: "15/11/1895"
        },
        {
            item: "Banco", 
            cliente: "Lucas Tolentino Coelho de Lima",
            atendente: "Gabriel Barbosa",
            status: "Pendente",
            data: "11/11/2011"
        },
        {
            item: "Crucifixo", 
            cliente: "Pabre Goleiro",
            atendente: "Agustín Daniel Rossi",
            status: "Reprovado",
            data: "12/12/2012"
        }
    ]

    const aprireInput = () => {

    }

    return (
        <div className="container">
            <nav style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div className='header' style={{ flex: 1 }}>
                    <h2>FabLab</h2>
                    <div className='inputBReqDiv'>
                        <input 
                            className='inputBReq' 
                            placeholder='Buscar...' 
                        />
                        <button className='searchButton' onClick={aprireInput}>
                            <SearchIcon style={{ height: 25, width: 25, color: '#fff' }} />
                        </button>
                    </div>
                </div>
                <div className='userOp'>
                    <UserIcon style={{ height: 30, width: 30 }} />
                </div>
            </nav>
            <div className='torzs'>
                <div className='headerTorzs'>
                    <h3>Requisições Recentes</h3>
                    <input type='date' className='dateInput' />
                </div>
                <div className='torzsInter'>
                    {req.map((r) => (
                        <div className='boxReq'>
                            <div className='divHeaderReq'>
                                <p>Ordem</p>
                                <div className={`status ${r.status.toLocaleLowerCase()}`}>
                                    <p>{r.status}</p>
                                </div>
                            </div>
                            <div className='diviReq'>
                                <p className='selecao'>Item Solicitado:</p>
                                <p>{r.item}</p>
                            </div>
                            <div className='diviReq'>
                                <p className='selecao'>Cliente:</p>
                                <p>{r.cliente}</p>
                            </div>
                            <div className='diviReq'>
                                <p className='selecao'>Atendente:</p>
                                <p>{r.atendente}</p>
                            </div>
                            <div className='diviReq'>
                                <p className='selecao'>Data:</p>
                                <p style={{ fontWeight: 'bold' }}>{r.data}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='floating'>
                <PIcon />
            </button>
        </div>
    )
}