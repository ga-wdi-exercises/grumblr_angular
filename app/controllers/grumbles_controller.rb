class GrumblesController < ApplicationController
  def index
    @grumbles = Grumble.all.order(:created_at)

    render json: @grumbles.to_json, status: :ok
  end
  def show
    @grumble = Grumble.find(params[:id])
    render json: @grumble.to_json, status: :ok
  end

  def create
    @grumble = Grumble.new(grumble_params)

    if @grumble.save
      render json: @grumble.to_json, status: :created
    else
      render json: @grumble.errors, status: :unprocessable_entity
    end
  end

  def update
    @grumble = Grumble.find(params[:id])
    if @grumble.update(grumble_params)
      render json: @grumble.to_json, status: :ok
    else
      render json: @grumble.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @grumble = Grumble.find(params[:id])
    @grumble.destroy
    render json: {message: "success"}, status: :ok
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def grumble_params
      params.require(:grumble).permit(:authorName, :content, :title, :photoUrl)
    end
end
