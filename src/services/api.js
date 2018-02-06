const url = "http://localhost:3001";

export default class API{

	static url(){
		return url;
	}

	static registrationUrl(){
		return url + "/api/v1/registrations";

	}

	static loginUrl(){
		return url + "/api/v1/sessions/login";
	}

	static ProductIndexUrl(){
		return url + "/api/v1/products";
	}

}