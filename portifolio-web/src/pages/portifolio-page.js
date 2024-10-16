import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyToClipBoard from '../utils/copy-to-clipboard';
const Main = () => {
    return (
        <div class='main-content d-flex flex-column align-items-center' style={{ height: '100vh' }}>
            <div class='main-content-apresentation w-100 h-50 d-flex justify-content-center align-items-center'>
                <div>
                    <h5 class='font-weight-bold mb-0'>Bem-vindo!</h5>
                    <h1 class='font-weight-bold mb-0'>Eu me chamo <span style={{ color: '#483D8B' }}>Gustavo Lohmann Linz</span></h1>
                    <h5 class='font-weight-bold mb-0'>Desenvolvedor Fullstack</h5>
                </div>
            </div>
            <h5>Entre em contato comigo:</h5>
            <div class="input-group mb-3 w-25">
                <div class="input-group-prepend">
                    <div class="input-group-text" onClick={() => CopyToClipBoard('freelancer')} id="btnGroupAddon" style={{ height: '40px'}}><FontAwesomeIcon icon="clipboard" /></div>
                </div>
                <input type="text" class="form-control" value="gustavolohmannfreelancer@gmail.com" id="email-freelancer" placeholder="Email (Freelancer): gustavolohmannfreelancer@gmail.com" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
            <div class="input-group mb-3 w-25" >
                <div class="input-group-prepend">
                    <div class="input-group-text"  onClick={() => CopyToClipBoard('recrutador')} id="btnGroupAddon" style={{ height: '40px'}}><FontAwesomeIcon icon="clipboard" /></div>
                </div>
                <input type="text" class="form-control" value="gustavolohmannlinz@gmail.com" id="email-recrutador" placeholder="Email (Recrutador): gustavolohmannlinz@gmail.com" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
        </div>
    )
}
export default Main;
