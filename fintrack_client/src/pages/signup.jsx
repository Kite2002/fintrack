import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #EDF0F2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContent = styled.form`
    width: 20vw;
    min-width: 190px;
    height: 50vh;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
`;

const FormHeader = styled.div`
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
    font-family: inherit;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid #333;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    outline: none;
    width: calc(100% - 2.4rem);
`;

const Button = styled.button`
    font-family: inherit;
    font-weight: 500;
    border-radius: 4px;
    background: var(--primary);
    color: #fefefe;
    font-size: 0.9rem;
    letter-spacing: -0.5px;
    height: auto;
`;

export const Signup = (props) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const apiUserCreate = async ({ username, password }) => {
        const uri = "http://localhost:4000/api/user/";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        };

        const response = await fetch(uri, options);
        if (response.status !== 201) {
            console.error(response);
            return;
        }
        
        const { token } = await response.json();
        localStorage.setItem("token", token);
        navigate("/");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        apiUserCreate({ username, password });
    };

    return (
        <Container>
            <FormContent onSubmit={onSubmit}>
                <FormHeader>Sign up</FormHeader>
                <Input type="text" placeholder="User name" value={username} onChange={e => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <Button type="submit">Sign up</Button>
            </FormContent>
        </Container>
    )
};