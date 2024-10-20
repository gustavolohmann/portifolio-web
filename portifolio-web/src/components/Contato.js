import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipBoard from "../utils/copy-to-clipboard";
const Contato = () => {
    return (
        <div className="main-content-contato d-flex flex-column align-items-center" style={{ height: "75vh" }}>
            <div className="text-center m-2">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Entre em contato comigo</h1>
            </div>
            <div className="input-group mb-3 w-25">
                <div className="input-group-prepend">
                    <div className="button-copy input-group-text" onClick={() => CopyToClipBoard("freelancer")} id="btnGroupAddon" style={{ height: "40px" }}><FontAwesomeIcon icon="clipboard" /></div>
                    <div className="cover-input"></div>
                </div>
                <input type="text" className="form-control" value="gustavolohmannfreelancer@gmail.com" id="email-freelancer" placeholder="Email (Freelancer): gustavolohmannfreelancer@gmail.com" aria-label="Input group example" aria-describedby="btnGroupAddon" readOnly />
            </div>
            <div className="input-group mb-3 w-25" >
                <div className="input-group-prepend">
                    <div className="button-copy input-group-text" onClick={() => CopyToClipBoard("recrutador")} id="btnGroupAddon" style={{ height: "40px" }}><FontAwesomeIcon icon="clipboard" /></div>
                    <div className="cover-input"></div>
                </div>
                <input type="text" className="form-control" value="gustavolohmannlinz@gmail.com" id="email-recrutador" placeholder="Email (Recrutador): gustavolohmannlinz@gmail.com" aria-label="Input group example" aria-describedby="btnGroupAddon" readOnly />
            </div>
            <div className="input-group mb-3 w-25" >
                <div className="input-group-prepend">
                    <div className="button-copy input-group-text" onClick={() => CopyToClipBoard("telefone")} id="btnGroupAddon" style={{ height: "40px" }}><FontAwesomeIcon icon="clipboard" /></div>
                    <div className="cover-input"></div>
                </div>
                <input type="text" className="form-control" value="(19) 99560-4044" id="telefone-recrutador" placeholder="Telefone: (19) 99560-4044" aria-label="Input group example" aria-describedby="btnGroupAddon" readOnly />
            </div>
        </div>
    );
}

export default Contato;