interface PropsBotoes{
    inc: () => void
    dec: () =>void
}

export default function Botoes(props: PropsBotoes) {
    return (
        <div className="flex justify-between pt-2 gap-2">
            <button className='botao flex-1' onClick={props.dec}>-</button>
            <button className='botao flex-1'onClick={props.inc}>+</button>
        </div>
    );
}
