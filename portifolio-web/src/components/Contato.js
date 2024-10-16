import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipBoard from "../utils/copy-to-clipboard";
const Contato = () => {
    return (
        <div className="d-flex flex-column align-items-center" style={{ height: "50vh" }}>
            <div class="input-group mb-3 w-25">
                <div class="input-group-prepend">
                    <div class="button-copy input-group-text" onClick={() => CopyToClipBoard("freelancer")} id="btnGroupAddon" style={{ height: "40px" }}><FontAwesomeIcon icon="clipboard" /></div>
                    <div class="cover-input"></div>
                </div>
                <input type="text" class="form-control" value="gustavolohmannfreelancer@gmail.com" id="email-freelancer" placeholder="Email (Freelancer): gustavolohmannfreelancer@gmail.com" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
            <div class="input-group mb-3 w-25" >
                <div class="input-group-prepend">
                    <div class="button-copy input-group-text" onClick={() => CopyToClipBoard("recrutador")} id="btnGroupAddon" style={{ height: "40px" }}><FontAwesomeIcon icon="clipboard" /></div>
                    <div class="cover-input"></div>
                </div>
                <input type="text" class="form-control" value="gustavolohmannlinz@gmail.com" id="email-recrutador" placeholder="Email (Recrutador): gustavolohmannlinz@gmail.com" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
        </div>
    );
}

export default Contato;