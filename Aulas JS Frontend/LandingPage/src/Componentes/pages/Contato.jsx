import React from "react"
import Card from '@mui/material/Card';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contato = () => {
    return (
        <section>
            <center>
                <h1>Contato</h1>
                <Card variant="outlined" 
                    sx={{
                        maxWidth: 350, 
                        display: "flex", 
                        flexDirection: 'column', 
                        marginBottom: 1, 
                        padding: 2
                    }}
                >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4>Alex Sandro</h4>
                        <a href="https://www.instagram.com/alekinho081" 
                            target="blank"
                            style={{color: "black"}}
                        >
                            <InstagramIcon />
                        </a>
                    </div>

                    <a style={{color:"black", textDecoration:'none'}} 
                    target="blank"
                     href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkkFSvVDlZKvsGkwmMlFLgNjqGJzHZdgvMvSgNrqQbXLcMcPDHCFBHDxwbBTGzcQBtPPsr"
                    
                    >
                        alex_borba-junior@estudante.sesisenai.org.br
                    </a>
                </Card>
                
                <Card variant="outlined"
                    sx={{
                        maxWidth: 350, 
                        display: "flex", 
                        flexDirection: 'column', 
                        marginBottom: 1,
                        padding: 2
                    }}
                >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4>Gabriel Lino</h4>
                        <a href="https://www.instagram.com/lino.s7/"
                        target="blank"
                            style={{color: "black"}}
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                    <a style={{color:"black", textDecoration:'none'}} 
                    target="blank"
                     href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkkFSvVDlZKvsGkwmMlFLgNjqGJzHZdgvMvSgNrqQbXLcMcPDHCFBHDxwbBTGzcQBtPPsr"
                    >
                        gabriel_lv_santos@estudante.sesisenai.org.br
                    </a>
                    
                </Card>
            </center>
        </section>
    )
}
