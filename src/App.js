import React from 'react';
import './style.css'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol,MDBCardGroup } from 'mdb-react-ui-kit';

import img1 from './tenis/img1.jpg';
import img2 from './tenis/img2.jpg';
import img3 from './tenis/img3.jpg';
import img4 from './tenis/img4.jpg';
import img5 from './tenis/img5.jpg';
import img6 from './tenis/img6.jpg';
import img7 from './tenis/img7.jpg';
import img81 from './tenis/img81.jpg';
import img91 from './tenis/img91.jpg';
import img101 from './tenis/img101.jpg';
import img111 from './tenis/img111.jpg';
import img112 from './tenis/img112.jpg';

export default function App() {
  return (
    <MDBCardGroup className='card'>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img1}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tenis Tuiuiú</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 249,00
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img2}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Onça Pintada</MDBCardTitle>
            <MDBCardText>
              Tamanho: 40
            </MDBCardText>
            <MDBCardText>
            R$ 200,00
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img3}
            alt='100px'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Tênis Jacaré</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 150,00
            </MDBCardText>
            <MDBCardText>
              Coleção Verâo 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho de 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img4}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Tamanduá Bandeira</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 160,00 
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img5}
            alt='100px'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Tênis Arara Azul</MDBCardTitle>
            <MDBCardText>
              Tamanho: 40
            </MDBCardText>
            <MDBCardText>
            R$ 140,00 
            </MDBCardText>
            <MDBCardText>
              Coleção Verâo 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img6}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Ariranha</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 130,00 
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho de 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img7}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Sucuri </MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 120,00 
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img81}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Cervo</MDBCardTitle>
            <MDBCardText>
              Tamanho: 40
            </MDBCardText>
            <MDBCardText>
            R$ 110,00  
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img91}
            alt='100px'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Tênis Surucucu</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 100,00   
            </MDBCardText>
            <MDBCardText>
              Coleção Verão 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho de 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img101}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Dourado</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 115,00
            </MDBCardText>
            <MDBCardText>
              Coleção Verâo 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img111}
            alt='100px'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Tenis Jaguar</MDBCardTitle>
            <MDBCardText>
              Tamanho: 40
            </MDBCardText>
            <MDBCardText>
            R$ 120,00
            </MDBCardText>
            <MDBCardText>
              Coleção Verâo 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img112}
            alt='100px'
            position='top'
            />
          <MDBCardBody>
            <MDBCardTitle>Tênis Zebra</MDBCardTitle>
            <MDBCardText>
              Tamanho: 38
            </MDBCardText>
            <MDBCardText>
            R$ 140,00
            </MDBCardText>
            <MDBCardText>
              Coleção Verâo 2022-2023
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>20 de Julho de 2022</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBCardGroup>
      );
}


