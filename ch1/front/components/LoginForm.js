import React,{useCallback,useState} from 'react';
import Link from 'next/link';
import {Form ,Input, Button, Col,Row,Card,Avatar}  from 'antd';
const LoginForm = () =>
{
     const  useInput = (initValue = null) =>
    {
        const [value,setter] = useState(initValue);
        const handler=useCallback((e)=>{
            setter(e.target.value);
        }, []);
        return [value,handler];
    };

    const [id,onChangeId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const onSubmitForm =useCallback((e) =>
    {
        e.preventDefault();
        console.log({
            id,password,
        });
    },[id,password]);
return ( 

                    <Form onSubmit={onSubmitForm}>
                    <div>
                        <label htmlFor="user-id" value >아이디</label>
                        <br />
                        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password"  type="password" value={password} onChange={onChangePassword} required></Input>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                        <Button><Link href="/signup"><a>회원가입</a></Link></Button>
                    </div>
                    </Form>
     

);
}

export default LoginForm
