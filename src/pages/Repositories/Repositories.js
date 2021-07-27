import React, {useEffect, useState} from "react";
import * as S from './styled';
import { useHistory } from "react-router-dom";

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect( () => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            console.log(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();             
        } else{
            history.push('/');
        }

    }, [] );

    return(
        <S.Conteiner>
            <S.Title> Repositórios </S.Title>
            <S.Lista>
                {repositories.map( (repository) => {
                    return( <S.ListItem> Repositório: {repository} </S.ListItem>)   
                }) 
            }            
            </S.Lista>
            <S.LinkHome to='/'> Voltar </S.LinkHome>
        </S.Conteiner>
    );
}

