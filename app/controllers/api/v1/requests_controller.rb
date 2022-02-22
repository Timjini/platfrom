class Api::V1::RequestsController < ApplicationController

    def index
      request_and_user = []

            Request.all.order(created_at: :desc).each do |request|
      request_and_user << {data: request, user: request.user.as_json(only: [:first_name, :last_name, :username, :id, :bio])}
    end
    
    def create
        request= Request.new(request_params)
        request.user_id = current_user.id
        if request.save
            render json: request
          else
            render json: request.errors
          end
    end

    def show
      if request
        render json: request
      else
        render json: request.errors
      end
    end

    def destroy
        Request.find(params[:id]).destroy!
        head :no_content
    end

    private

  def request_params
    params.require(:request).permit(:description, :location, :sort, :fulfillment)
  end
  def request
    @request ||= Request.find(params[:id])
  end

  def set_request
    if Request.find(params[:id]).user != current_user
      render json: {message: 'Action not allowed'}
    end
  end

end
end