import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div id="contact">
    <div className="main-contact">
        <div className="container-footer">
            <div className='git-right'>
                <div className='git-bloc'>
                    <h4>Frontend</h4>
                    <a className="btn-resaux" style={{ backgroundColor: "#333333" }} href="https://github.com/joelmpy/DC-Comics-Front" target="blank"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className='git-left'>
                <div className='git-bloc'>
                    <h4>Backend</h4>
                    <a className="btn-resaux" style={{ backgroundColor: "#333333" }} href="https://github.com/joelmpy/DC-Comics-Back" target="blank"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>

        </div>

        <section className="resaux">
            <a className="btn-resaux" style={{ backgroundColor: "#dd4b39" }} href="#" target="blank"><i class="fab fa-google"></i></a>
            <a className="btn-resaux" style={{ backgroundColor: "#0082ca" }} href="#" target="blank"><i class="fab fa-linkedin-in"></i></a>
            <a className="btn-resaux" style={{ backgroundColor: "#333333" }} href="https://github.com/joelmpy" target="blank"><i class="fa-brands fa-github"></i></a>
        </section>

        <div className="text-end">
            <span>© 2022 Copyright:</span>
        </div>
    </div>
</div>
  )
}

export default Footer