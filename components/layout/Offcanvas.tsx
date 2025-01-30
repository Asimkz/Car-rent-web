import Link from "next/link";

export default function Offcanvas({ isOffcanvas, handleOffcanvas }: any) {
  return (
    <>
      <div
        className={`sidebar-canvas-wrapper perfect-scrollbar button-bg-2 ${
          isOffcanvas ? "sidebar-canvas-visible" : ""
        }`}
      >
        <div className="sidebar-canvas-container">
          <div className="sidebar-canvas-head">
            <div className="sidebar-canvas-logo">
              <Link className="d-flex" href="/">
                <img
                  style={{ width: "180px", height: "auto" }}
                  className="light-mode"
                  alt="Carento"
                  src="/assets/imgs/template/logo-d.png"
                />
                <img
                  className="dark-mode"
                  alt="Carento"
                  src="/assets/imgs/template/logo-w.jpg"
                />
              </Link>
            </div>
          </div>
          <div className="sidebar-canvas-content">
            <div className="box-contactus">
              <h6 className="title-contactus neutral-1000">Contact Us</h6>
              <div className="contact-info">
                <p className="address-2 text-md-medium neutral-1000">
                  4517 Washington Ave. <br />
                  Manchester, Kentucky 39495
                </p>
                <p className="hour-work-2 text-md-medium neutral-1000">
                  Hours: 8:00 - 17:00, Mon - Sat
                </p>
                <p className="email-2 text-md-medium neutral-1000">
                  support@carento.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOffcanvas && (
        <div className="body-overlay-1" onClick={handleOffcanvas} />
      )}
    </>
  );
}
