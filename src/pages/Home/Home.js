import React, { useState } from "react";
import axios from "axios"; 
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
    const [usuario, setUsuario] = useState("");
    const history = useHistory();
    const [erro, setErro] = useState(false);

    function handlePesquisa() {
        axios.get(`https:api.github.com/users/${usuario}/repos`).then(response => {
            const repositores = response.data;
            const repositoriesName = [];
            repositores.map( (repository) => {
              repositoriesName.push(repository.name);
            });
            
            //Salvar dados no localStorage
            localStorage.setItem('repositoriesName' , JSON.stringify(repositoriesName))
            //colocar o erro
            setErro(false);
            // Mudar página
            history.push('/repositories');
        }).catch( erro => {
            setErro(true);
        })
        
    }

    return (
        <S.HomeConteiner>
            <S.Content>
                <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} /> 
                <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
            </S.Content>
            {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
        </S.HomeConteiner>
    );

}

export default App;