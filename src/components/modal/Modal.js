import './modal.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className='mobilemenu'><span class="mobilemenu__close stroke-theme-hover" title="Закрыть">
		<i class="svg inline  svg-inline-" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1L1 13M1 1L13 13" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</i>	</span>
                {children}</div>
            
            </div>
        </div>
    );
}
 
export default Modal;