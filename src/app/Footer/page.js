import Image from "next/image";
import brand from "../../../public/shopping-bag.png";

export default function Footer() {
  return (
    <footer className="p-6 max-w-[1300px] mx-auto mt-16">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          <Image className="w-8" src={brand} alt="shopApp Logo" />
          <a className="text-xl font-semibold text-emerald-500">
            Shop<span className="text-2xl">A</span>pp
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ShopApp. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-600">
          <a
            href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyDMsS05XYDRgdGDwYi8pzywpSS0CAFnOB00&q=twitter&oq=twi&gs_lcrp=EgZjaHJvbWUqEwgBEC4YgwEYxwEYsQMY0QMYgAQyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIKCAIQABixAxiABDIQCAMQLhjHARixAxjRAxiABDIKCAQQABixAxiABDINCAUQABiDARixAxiABDIMCAYQABgUGIcCGIAEMgcIBxAAGI8CMgcICBAAGI8C0gEJMjU4OGowajE1qAIIsAIB8QVUeV6nWa9uPQ&sourceid=chrome&ie=UTF-8"
            aria-label="Twitter"
            className="hover:text-emerald-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775c1.017-.61 1.798-1.574 2.165-2.724a9.936 9.936 0 0 1-3.127 1.195c-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.691 7.58 4.063 5.62 1.634 2.641c-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084c.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://www.google.com/search?gs_ssp=eJzj4tTP1TewzEouKzZg9GKvzC8tKU1KBQA_-AaN&q=youtube&oq=y&gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxiABBiKBTIGCAAQRRg8MgYIARBFGDwyDAgCEC4YJxiABBiKBTIGCAMQRRhAMg8IBBBFGDkYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgxNjI2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
            aria-label="YouTube"
            className="hover:text-emerald-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.267 4.356-2.621 4.385-8.816-.029-6.196-.488-8.55-4.385-8.816zM9 16V8l8 4-8 4z" />
            </svg>
          </a>
          <a
            href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&q=facebook&oq=fa&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxjHARjRAxiABBiKBTIGCAAQRRg8MhIIARAuGCcYxwEY0QMYgAQYigUyBggCEEUYOTISCAMQABhDGIMBGLEDGIAEGIoFMgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgzMDUwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
            aria-label="Facebook"
            className="hover:text-emerald-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
