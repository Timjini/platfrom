class Api::V1::RequestsController < ApplicationController

    def index
        @request= Request.all
        render json: @request
    end
    
    def create
        request= Request.new(request_params)
        if request.save
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

end