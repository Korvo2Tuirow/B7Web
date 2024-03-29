"use client"

import { GeoForm } from '@/components/Geo';
import { Person } from '@/components/Person';
import { Card } from '@/components/Card';
import { Circle } from '@/components/Circle';
import { Cond } from '@/components/Cond';
import { peopleList } from '@/data/peopleList';
import { Horas } from '@/components/Horas';
import { Estrelas } from '@/components/Estrelas';
import { Notas } from '@/components/Notas';
import { studentsData } from '@/data/students';
import { Click } from '@/components/Click';
import { ButtonCustomizado } from '@/components/ButtonCustomizado';
import { Contador } from '@/components/State';
import { Input } from '@/components/Input';
import { StateUpdate } from '@/components/StateUpdater';
import { Objetos } from '@/components/Objetos';
import { Arrays } from '@/components/Arrays';
import { TodoList } from '@/components/TodoList';
import { Desafio01 } from '@/components/Desafio01';
import { Quiz } from '@/components/Quiz'
import { UseEfectPlayer } from '@/components/UseEfectPlayer';
import { useState } from 'react';
import { Quadrado } from '@/components/Quadrado';
import { Reducer } from '@/components/Reducer';
import { Header } from '@/components/Context/Header';
import { CountContext, CountInitialData, CountProvider } from '@/components/Context/constexts/CountContext';
import { OnlineUsers } from '@/components/Context/OnlineUsers';
import { Context2 } from '@/components/Context2/Context2';
import { Logon } from '@/components/exercicioContext/Logon';
import { LoggedUserProvider } from '@/components/exercicioContext/LoggedUser';
import { PostContext } from '@/components/exercicioContext2/PostPage';
import { PostProvider } from '@/components/exercicioContext2/ContextsPosts';
import { Dark } from '@/components/DarkTheme/Dark';
import { ThemeProvider } from '@/components/DarkTheme/DarkContext';
import { Chat } from '@/components/Chat/Chat';
import { UserProvider } from '@/components/Chat/UserContext';
import { ChatProvider } from '@/components/Chat/ChatContext';




const Page = () => {

  //filtrar a lista
  const motoca = peopleList.filter(person => person.profissao == "Motoboy");


  const clicar1 = () => alert("Clicou 1");
  const clicar2 = () => alert("Clicou 2");
  const clicar3 = () => alert("Clicou 3");


  ////////CLEARUP//////////////////////////////////////////////////////////////////////
  const ClearUp = () => {

    const [show, setShow] = useState(false);


    return (
      <div className="flex flex-col justify-center items-center p-20 bg-emerald-200 h-screen">
        <h1 className='text-black font-bold mb-40 text-5xl'>ClearUp no useEfect</h1>
        <button onClick={() => { setShow(!show) }} className="text-black bg-fuchsia-600 p-5 rounded-md shadow-md shadow-gray-800 font-bold hover:scale-110">MOSTRAR / OCUTAR</button>

        {show && <Quadrado />}

      </div>
    )
  }
  ////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>



      <Person
        name="JEff Bezos"
        url="https://www.infomoney.com.br/wp-content/uploads/2019/06/jeff-bezos-1.jpg?fit=900%2C600&quality=50&strip=all"
        roles={["CEO AMAZON", "CEO Blue Origin"]}
      />

      <Person
        name="  "

        roles={["CEO Krill", "CEO Jam"]}
      />

      <Card>
        <>
          <h1 className="text-3xl font-bold italic text-center ">Outro TESTE qualquer</h1>
          <p className='text-right text-sm '>Testando children ReactNode</p>
          <Circle />
        </>

      </Card>

      <Cond frase="TEXTO do AUTOR"
      //autor='Korvo'

      />


      <ul>
        {peopleList.map(person =>
          <li key={person.id}>{person.nome} - {person.profissao}</li>)}
      </ul>

      <hr className='mb-5' />

      {motoca.length > 0 &&
        <>
          <div>
            <ul>
              {motoca.map(person =>
                <li className='pb-5' key={person.id}>{person.nome} - {person.profissao}</li>)}
            </ul>
          </div>
        </>
      }


      <Horas />


      <div className='mb-20'>
        <Estrelas nota={3} />
      </div>


      <div className='container mx-auto'>
        <Notas students={studentsData}

        />
      </div>


      <Click />


      <div className='flex mx-auto justify-center items-center h-48'>

        <ButtonCustomizado label='Clique 1' onClick={clicar1} />
        <ButtonCustomizado label='Clique 2' onClick={clicar2} />
        <ButtonCustomizado label='Clique 3' onClick={clicar3} />

      </div>

      <Contador />

      <Input />

      <StateUpdate />

      <Objetos />

      <Arrays />

      <TodoList />

      <Desafio01 />

      <Quiz />

      <UseEfectPlayer />

      <ClearUp />

      <Reducer />

      <CountProvider>
        <Header />
      </CountProvider>


      <Context2 />

      <LoggedUserProvider>
        <Logon />
      </LoggedUserProvider>

      <PostProvider>
        <PostContext />
      </PostProvider>

      <ThemeProvider>
        <Dark children={undefined} />
      </ThemeProvider>

      <UserProvider>
        <ChatProvider>
          <Chat />
        </ChatProvider >
       </UserProvider>

        </div>

        )
};

        export default Page;