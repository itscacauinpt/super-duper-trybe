Tests that works one hundred percent, confia u.u
<!-- import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    render(<App />);
    const linkEle = screen.getByText(/search digimon/i);
    const searchInput = screen.getByRole('textbox', { name: /digimon/i });

    expect(linkEle && searchInput).toBeInTheDocument();
  });
  it('insira um valor na caixa de busca', () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /digimon/i });
    expect(searchInput).toBeInTheDocument();

    userEvent.type(searchInput, 'Agumon');
    expect(searchInput).toHaveValue('Agumon');
  });
  it('não tem nenhum digmon renderizado ao entrar no site', () => {
    render(<App />);
    // const digimon = screen.getByRole('heading', { level: 2 }); // erro quando não acha
    const digimon = screen.queryByRole('heading', { level: 2 });
    expect(digimon).not.toBeInTheDocument();
  });
  it('busca por digimon', async () => {
    // entendendo o que a api retorna para o teste replicar a api
    // api mockada do jeito mais simples que tem heuhe
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https',
    }];
    global.fetch = jest.fn(() => Promise.resolve({ // o fetch volta com uma função como promise, que retorna um json
      json: () => Promise.resolve(digimon), // o json volta com uma função como promise, que retorna o objeto da api
    }));

    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /digimon/i });
    userEvent.type(searchInput, 'Agumon');

    const button = screen.getByRole('button', { name: /search digimon/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    // const level = screen.getByText(/'level: rookie'/i); // resolvendo o problema de coisa asscincrona:
    const level = await screen.findByText(/level: rookie/i); // resolvendo o problema de coisa asscincrona
    const digiName = screen.getByText(/agumon/i);
    // e para procurar uma imagem
    expect(level && digiName).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    // expect(global.fetch).toBeCalledWith('url');
  });
  it('busca por digimon inexistente', async () => {
    // mensagem de erro da api mockada -> { ErrorMsg }
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /digimon/i });
    userEvent.type(searchInput, 'Pikachu');

    const button = screen.getByRole('button', { name: /search digimon/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const message = await screen.findByText(ErrorMsg);
    expect(message).toBeInTheDocument();
  });
  it('se não escrevi nenhum digimon, não dá pra pesquisar nenhum digimon', () => {
    render(<App />);

    // mockando a api mas como nesse teste ele não vai precisar retornar nada, eu não uso a versão completa
    global.fetch = jest.fn();

    const searchInput = screen.getByRole('textbox', { name: /digimon/i });
    expect(searchInput).toHaveValue('');

    const button = screen.getByRole('button', { name: /search digimon/i });
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledTimes(0);
  });
  it('teste catch error', () => {
    render(<App />);

    global.fetch = jest.fn(() => new Error('Erro ao fazer a requisição'));

    const searchInput = screen.getByRole('textbox', { name: /digimon/i });
    userEvent.type(searchInput, 'teste');
    const button = screen.getByRole('button', { name: /search digimon/i });
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
}); -->
