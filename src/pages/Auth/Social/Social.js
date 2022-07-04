
const Social = ({handleGoogleSignIn}) => {
    return (
        <div className="mx-auto">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Social;