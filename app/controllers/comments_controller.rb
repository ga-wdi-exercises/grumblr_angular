class CommentsController < ApplicationController
  def index
    @grumble = Grumble.find(params[:grumble_id])
    @comments = @grumble.comments.order(:created_at)

    render json: @comments.to_json, status: :ok
  end

  def create
    @grumble = Grumble.find(params[:grumble_id])
    @comment = @grumble.comments.build(comment_params)

    if @comment.save
      render json: @comment.to_json, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment.to_json, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: {message: "success"}, status: :ok
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:authorName, :content, :grumble_id)
    end
end
