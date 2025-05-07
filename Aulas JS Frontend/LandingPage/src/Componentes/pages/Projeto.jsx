import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export const Projeto = () => {

    const itemData = [
        {
            img: './Imagens/loadingInit.jpg',
            title: 'Loading Page',
        },
        {
            img: './Imagens/login.jpg',
            title: 'Login Page',
        },
        {
            img: './Imagens/dash.jpg',
            title: 'Dashboard Page',
        },
        {
            img: './Imagens/estoque.jpg',
            title: 'Estoque Page',
        },
        {
            img: './Imagens/funcionarios.jpg',
            title: 'Funcionarios Page',
        },
        {
            img: './Imagens/producao.jpg',
            title: 'Produção Page',
        }
    ];

    return (
        <section >
            <h1>Projeto</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '40px' }}>
                    <Card
                        variant="outlined"
                        sx={{
                            minHeight: 550,
                            minWidth: 600,
                            maxWidth: 600,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 2,
                        }}
                    >
                        <Typography variant="h6">Pitch</Typography>
                        <Typography variant="body6" sx={{ textAlign: 'left' }}>Uma empresa com um estoque desorganizado enfrentava atrasos, perdas e retrabalho diário. Foi aí que nasceu o Tech Solutions Dashboard, um aplicativo desenvolvido especialmente para transformar a forma como os funcionários da área de estoque gerenciam os produtos.
                            Com o Tech Solutions Dashboard, os colaboradores têm acesso rápido e intuitivo ao controle de entradas e saídas, alertas automáticos de reposição, inventário atualizado em tempo real e relatórios claros para tomadas de decisão rápidas e seguras.
                            <br />Tudo isso com uma interface simples, desenvolvida para o uso direto no dia a dia do estoque.
                        </Typography>
                    </Card>
                </div>
                <div style={{paddingRight:20, paddingBottom:30}}>

                    <ImageList sx={{ width: 600, height: 550, border:'solid 1px', paddingRight:2 }} variant="woven" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>


                </div>
            </div>

        </section>
    )



}