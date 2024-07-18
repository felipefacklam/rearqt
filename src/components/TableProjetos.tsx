import React from "react";

export default function TableProjetos() {
  return (
    <div>
      <table className="table-fixed border-collapse max-w-xl">
        <thead>
          <tr>
            <th className="border border-brown-primary">Título</th>
            <th className="border border-brown-primary">Imagens</th>
            <th className="border border-brown-primary">Última modificação</th>
            <th className="border border-none"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-brown-primary">Projeto Nome Teste</td>
            <td className="border border-brown-primary">5</td>
            <td className="border border-brown-primary">16/07/2024</td>
            <td className="border border-none">
              <button className="button w-full">Editar</button>
            </td>
          </tr>
          <tr>
            <td className="border border-brown-primary">Projeto 1</td>
            <td className="border border-brown-primary">7</td>
            <td className="border border-brown-primary">04/04/2024</td>
            <td className="border border-none">
              <button className="button w-full">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
