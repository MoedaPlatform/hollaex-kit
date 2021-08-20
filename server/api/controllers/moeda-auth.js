const { request, gql } = require('graphql-request');

const query = gql`
	mutation Signin($input: SigninInput!) {
		signin(input: $input) {
			viewer {
				_id
			}
		}
	}
`;

exports.signinMoedaUser = ({ contact, password }) => {
	return new Promise((resolve, reject) => {
		request('https://gateway-dev.moedaseeds.com', query, {
			input: { contact, password },
		})
			.then((res) => {
				if (
					res &&
					res.signin &&
					res.signin.viewer &&
					res.signin.viewer._id
				) {
					return resolve(res.signin.viewer._id);
				}
				reject('INVALID_USER');
			})
			.catch((e) => {
				console.log(e);
				reject(e);
			});
	});
};
