require 'rails_helper'

RSpec.describe "Authentications", type: :request do
  describe "POST /api/v1/auth/login" do
    let!(:admin) { User.create!(email: 'admin@test.com', password: 'password123', role: 'admin') }

    context "with valid credentials" do
      it "returns a successful response with token" do
        post "/api/v1/auth/login", params: { email: 'admin@test.com', password: 'password123' }

        expect(response).to have_http_status(:ok)

        json_body = JSON.parse(response.body)
        expect(json_body).to have_key('token')
        expect(json_body['user']['email']).to eq('admin@test.com')
        expect(json_body['user']['role']).to eq('admin')
      end
    end

    context "with invalid credentials" do
      it "returns unauthorized response" do
        post "/api/v1/auth/login", params: { email: 'admin@test.com', password: 'wrongpassword' }

        expect(response).to have_http_status(:unauthorized)

        json_body = JSON.parse(response.body)
        expect(json_body['errors'][0]['message']).to eq('Invalid email or password')
      end
    end
  end
end
