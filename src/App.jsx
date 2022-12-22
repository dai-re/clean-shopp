import image1 from './assets/pro.webp'
import { FaArrowRight, FaTrash } from 'react-icons/fa'

function App() {
  return (
    <div className='container'>
      <div className='section' style={{
        width: "100vw",
        height: "100vh",
      }}>
        
        <div className='left' style={{
          width: "auto",
          maxHeight: "100vh",
          background: "#cdcdcd60",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div className='boxs' style={{
            overflow: "hidden",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src={image1} alt="image1" style={{
              width: "100%",
            }} />
          </div>
        </div>

        <div className='right' style={{
          width: "auto",
          maxHeight: "100vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: "capitalize",
          boxShadow: "0px 0px 7px #87878730"
        }}>
          <div style={{
            width: 300,
            height: "auto",
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
            
            <h4><span style={{
              color: "#737373",
            }}>category</span><FaArrowRight /> sport </h4>
            <h2>sepeda</h2>
            <p style={{
              lineHeight: 1.2,
              textTransform: "lowercase",
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis illum animi nemo ab aperiam adipisci dignissimos nulla natus aliquam?</p>
            <span style={{
              fontStyle: "italic"
            }}>Rp: 2.000.000.00</span><br />
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 5,
            }}>
              <button style={{
                paddingTop: 10,
                paddingBottom: 10,
                border: "none",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
                borderRadius: 10,
                fontWeight: 900,
                letterSpacing: 3,
                textTransform: "capitalize",
              }}>buy</button>
              <button style={{
                width: 47,
                height: 47,
                fontSize: 20,
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: "2px solid #000000",
                backgroundColor: "#fff",
                color: "#000",
              }}><FaTrash /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
