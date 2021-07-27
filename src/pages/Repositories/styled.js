// Criação dos componentes estilizados
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Elemento h1 estilizado
// export irá permitir a importação desse elemento

export const Conteiner = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: Arial;
    color: #333;
`;

export const Lista = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: Arial;
`;

export const ListItem = styled.li`
    background: #000;
    color: #fff;
    padding: 0.5rem;
    margin: 0.5rem 0;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: 0.5rem 0;
    color: #fff;
    text-decoration: none;
`;
