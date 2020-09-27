import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import "./form.css";
import { AddressState } from "./form.interfaces";
import InputMask from "react-input-mask";
import { Button } from "../button/Button";
import client from "../../client/client";
import { Input } from "../input/Input";

const INITIAL_STATE: AddressState = {
  bairro: "",
  cep: "",
  complemento: "",
  ddd: "",
  gia: "",
  ibge: "",
  localidade: "",
  logradouro: "",
  siafi: "",
  uf: "",
};

export const Form: FunctionComponent = () => {
  const [address, setAddress] = useState<AddressState>(INITIAL_STATE);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [zipCode, setZipCode] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // eslint-disable-next-line
      const zip = zipCode.replace(/\-/g, ""); 

      setLoading(true);

      client
        .get<AddressState>(`/api/v1/pvt/cep?cep=${zip}`)
        .then(({ data }) => {
          if (data.cep) {
            setAddress(data);
          }
        })
        .catch((error) => {})
        .finally(() => {
          setLoading(false);
        });
    },
    [zipCode]
  );

  const disabledButton = useMemo(() => {
    if (zipCode.length === 9) {
      return false;
    }

    return true;
  }, [zipCode]);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-cep-container">
          <div className="input-container">
            <label>CEP</label>
            <div>
              <InputMask
                mask="99999-999"
                placeholder="Digite seu cep"
                onChange={handleChange}
                className="input--default"
                maskChar=""
              />
              <Button
                onClick={() => {}}
                className="button--default"
                disabled={disabledButton}
                type="submit"
              >
                {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  <span>Buscar</span>
                )}
              </Button>
            </div>
          </div>
        </div>
        <a
          href="http://www.buscacep.correios.com.br/sistemas/buscacep/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Não sei meu cep
        </a>
        <div className="inputs-response">
          <Input
            placeholder="CEP"
            required
            value={address.cep}
            name="rua"
            disabled
          />
          <Input
            placeholder="Rua"
            required
            value={address.logradouro}
            name="rua"
            disabled
          />
          <Input
            placeholder="Bairro"
            required
            value={address.bairro}
            name="bairro"
            disabled
          />
          <Input
            placeholder="Cidade"
            required
            value={address.localidade}
            name="cidade"
            disabled
          />
          <Input
            placeholder="UF"
            required
            value={address.uf}
            name="uf"
            disabled
          />
          <Input
            placeholder="Complemento"
            required
            value={address.complemento}
            name="complemento"
            disabled
          />
        </div>
      </form>
    </div>
  );
};
