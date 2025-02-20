import { useState, useEffect } from 'react'
import './styles.css'
import { Card, CardProps } from '../../components/Card/Card';

type ProfileResponse = {
  name: string
  avatar_url: string
}

type User = {
  name: string
  avatar: string
}

export default function App() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState<CardProps[]>([])
  const [user, setUser] = useState<User | null>(null)

  function handleAddStudent() {
    if (!studentName.trim()) return;

    const newStudent: CardProps = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent])
    setStudentName('')
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleAddStudent()
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/queirozz8')
      const data: ProfileResponse = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData();
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          {user ? (
            <>
              <strong>{user.name}</strong>
              <img src={user.avatar} alt="Foto de perfil" />
            </>  
            ) : (
              <strong>Carregando...</strong>
            )}
        </div>
      </header>


      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={ e => setStudentName(e.target.value) }
        onKeyDown={handleKeyDown}
        value={studentName}
        id='input'
      />
      <button 
        type="button" 
        onClick={handleAddStudent}>
          Adicionar
      </button>

      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
      }
    </div>
  )
}
