import Image from 'next/image'

export default function Home() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header-logo col-md-6">
            <Image src="https://via.placeholder.com/60x60" alt="Logo" width={60} height={60} />
          </div>
          <div className="header-menu col-md-6">
            
          </div>
        </div>
      </div>
    </header>
  )
}
