import React,{useState,useCallback} from 'react';

import { Form, Input,Checkbox,Button } from 'antd';

 const signup = () =>
{



    const [id,setId] = useState('');

    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(password!==passwordCheck)
        {
            return setPasswordError(true);
        }
        if(!term)
        {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
             
        })
    },[password,passwordCheck,term]);

    const onChangeID = useCallback((e) => {
        setId(e.target.value);
    },[id]);

    const onChangeNick = useCallback((e) => {
        setNick(e.target.value);
    },[nick]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[password]);
    
    const onChangePasswordCheck = useCallback((e) =>
    {
        setPasswordError(e.target.value !== password);

            setPasswordCheck(e.target.value);
    },[passwordCheck]);
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    },[]);

    

    return(
        <>
            
                <Form onSubmit={onSubmit} style={{padding:30}}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeID}></Input>
                    </div>

                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nick} required onChange={onChangeNick}></Input>
                    </div>

                    <div>
                        <label htmlFor="user-pass">패스워드</label>
                        <br />
                        <Input name="user-pass" type="password" value={password} required onChange={onChangePassword}></Input>
                    </div>
                    <div>

                        <label htmlFor="user-passCheck">패스워드 체크</label>
                        <br />
                        <Input type="password" name="user-passCheck" value={passwordCheck} required onChange={onChangePasswordCheck}></Input>
                        {passwordError &&  <div style={{color:'red'}}>패스워드가 일치하지 않습니다.</div>}

                    </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>종근이의 말을 잘 들을 것에 동의합니다.</Checkbox>
                    {termError   &&  <div style={{color:'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>

                <div style={{marginTop: 10}}>

                    <Button type="primary"  htmlType="submit">가입하기</Button>
                </div>

                </Form>
           
        </>
    )
};

export default signup;  