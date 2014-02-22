class LogsController < ApplicationController
	
	#
	def new
	end

	# 
	def show
	  @log = Log.find(params[:id])
	end

	# method for creating a new log in the db
	def create
	  @log = Log.new(post_params)
	  @log.save
	  redirect_to @log
	end
  # helper function for create, permits the parameters passed
	private
  def post_params
    params.require(:post).permit(:date, :humidity)
  end

  # logs index action
  def index
    @logs = Log.all
  end

end