import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Alors, c'est parti ?</h2>
      <div className="text-contact">
        Contactez-moi dès aujourd’hui et discutons ensemble de votre projet
        digital. <br />
        Je suis disponible par mail et par téléphone. <br />
        Je serai ravie de vous rencontrez ! À bientôt.
      </div>
      <div className="contact-items hidden">
        <svg
          className="contact-icons"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 612 612"
        >
          <path
            d="M306.001,33.081C109.937,33.077-0.002,94.003,0,165.752v26.524c-0.002,33.671,27.305,60.983,60.993,60.979h85.373
			c33.68,0,60.99-27.305,60.99-60.981v-26.522c0-0.613-0.031-1.238-0.052-1.85h197.391c-0.023,0.613-0.051,1.221-0.051,1.85v26.524
			c0,33.673,27.31,60.981,60.99,60.981h85.373C584.697,253.26,612,225.952,612,192.276v-26.524
			C612.002,94.017,502.065,33.077,306.001,33.081z"
          />
          <path
            d="M389.073,262.149l-12.268-3.009v-38.153c0-16.343-13.293-29.638-29.636-29.638h-82.337
			c-16.341,0-29.636,13.293-29.636,29.638v38.153l-12.268,3.009c-151.541,37.177-167.9,155.916-167.9,205.241
			c0,47.438,10.148,78.208,31.023,94.071c20.193,15.344,50.625,17.459,80.506,17.459h278.888c29.881,0,60.314-2.115,80.508-17.459
			c20.874-15.863,31.022-46.633,31.022-94.071C556.973,418.065,540.614,299.325,389.073,262.149z M258.945,504.164
			c0,6.403-5.203,11.61-11.625,11.61h-23.108c-6.424,0-11.624-5.205-11.624-11.61v-23.137c0-6.398,5.2-11.61,11.624-11.61h23.108
			c6.422,0,11.625,5.212,11.625,11.61V504.164z M258.945,433.931c0,6.401-5.203,11.608-11.625,11.608h-23.108
			c-6.424,0-11.624-5.207-11.624-11.608v-23.139c0-6.407,5.2-11.608,11.624-11.608h23.108c6.422,0,11.625,5.203,11.625,11.608
			V433.931z M258.945,363.698c0,6.394-5.203,11.608-11.625,11.608h-23.108c-6.424,0-11.624-5.214-11.624-11.608v-23.136
			c0-6.41,5.2-11.611,11.624-11.611h23.108c6.422,0,11.625,5.203,11.625,11.611V363.698z M329.178,504.164
			c0,6.403-5.201,11.61-11.624,11.61h-23.108c-6.424,0-11.625-5.205-11.625-11.61v-23.137c0-6.398,5.201-11.61,11.625-11.61h23.108
			c6.422,0,11.624,5.212,11.624,11.61V504.164z M329.178,433.931c0,6.401-5.201,11.608-11.624,11.608h-23.108
			c-6.424,0-11.625-5.207-11.625-11.608v-23.139c0-6.407,5.201-11.608,11.625-11.608h23.108c6.422,0,11.624,5.203,11.624,11.608
			V433.931z M329.178,363.698c0,6.394-5.201,11.608-11.624,11.608h-23.108c-6.424,0-11.625-5.214-11.625-11.608v-23.136
			c0-6.41,5.201-11.611,11.625-11.611h23.108c6.422,0,11.624,5.203,11.624,11.611V363.698z M399.411,504.164
			c0,6.403-5.203,11.61-11.625,11.61h-23.108c-6.422,0-11.624-5.205-11.624-11.61v-23.137c0-6.398,5.201-11.61,11.624-11.61h23.108
			c6.422,0,11.625,5.212,11.625,11.61V504.164z M399.411,433.931c0,6.401-5.203,11.608-11.625,11.608h-23.108
			c-6.422,0-11.624-5.207-11.624-11.608v-23.139c0-6.407,5.201-11.608,11.624-11.608h23.108c6.422,0,11.625,5.203,11.625,11.608
			V433.931z M399.411,363.698c0,6.394-5.203,11.608-11.625,11.608h-23.108c-6.422,0-11.624-5.214-11.624-11.608v-23.136
			c0-6.41,5.201-11.611,11.624-11.611h23.108c6.422,0,11.625,5.203,11.625,11.611V363.698z"
          />
        </svg>
        <p>+33 6 42 07 87 22</p>
      </div>
      <div className="contact-items">
        <svg
          className="contact-icons"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M467.183,211.895L267.684,12.355c-3.103-3.094-7.277-4.829-11.651-4.829c-4.37,0-8.55,1.735-11.647,4.829L44.817,211.895
	c-3.099,3.094-4.829,7.277-4.829,11.643v264.469c0,9.094,7.377,16.467,16.481,16.467h399.098c9.104,0,16.444-7.373,16.444-16.467
	V223.538C472.012,219.327,470.413,215.111,467.183,211.895z M256.032,47.284l176.235,176.254l-48.453,48.458v-56.267
	c0-10.489-8.518-18.998-19.025-18.998h-217.61c-10.476,0-18.988,8.508-18.988,18.998v56.248l-48.426-48.439L256.032,47.284z
	 M72.946,471.544V263.295l97.464,97.469l-67.673,63.389c-4.993,4.67-5.256,12.483-0.586,17.458c2.444,2.594,5.742,3.907,9.035,3.907
	c3.003,0,6.038-1.1,8.423-3.334l68.291-63.939l56.484,56.484c3.098,3.08,7.277,4.82,11.647,4.82c4.374,0,8.549-1.74,11.651-4.82
	l56.417-56.453l68.295,63.907c2.381,2.235,5.415,3.334,8.418,3.334c3.294,0,6.592-1.313,9.04-3.907
	c4.666-4.983,4.402-12.806-0.591-17.458l-67.673-63.357l97.501-97.501v208.249H72.946z"
          />
        </svg>

        <a className="white-links" href="mailto:justine.provent90@mail.com">
          justine.provent90@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
